'use client'

import AppShell from "@/components/AppShell";

import {useRef, useState} from 'react';
import {Container, FormField, SpaceBetween, Textarea, Wizard} from "@cloudscape-design/components";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Input from "@cloudscape-design/components/input";


export default function Home() {
  const [jsonText, setJsonText] = useState("{}");
  const [status, setStatus] = useState("");
  const [payload, setPayload] = useState("");
  const [endpointValue, setEndpointValue] = useState("https://demo.ctraderapi.com:5036");

  const [
    activeStepIndex,
    setActiveStepIndex
  ] = useState(0);

  // WebSocket setup
  const [socketStatus, setSocketStatus] = useState('Disconnected');
  const socketRef = useRef<WebSocket | null>(null);

  const [clientId, setClientId] = useState(process.env.NEXT_PUBLIC_CTRADER_CLIENT_ID);
  const [clientSecret, setClientSecret] = useState(process.env.NEXT_PUBLIC_CTRADER_CLIENT_SECRET);
  const [traderAccountId, setTraderAccountId] = useState(process.env.NEXT_PUBLIC_CTRADER_TRADER_ACCOUNT_ID);
  const [accessToken, setAccessToken] = useState('cf5SYjJX4deffqdu7K6IDymJDh1j1Pz01eEQ9rcgr50');

  const sendJsonOverTcp = async () => {
    setStatus("Sending...");

    try {
      const response = await fetch(endpointValue, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({json: jsonText, endpointValue})
      });

      if (response.ok) {
        const result = await response.json();
        setStatus(`✅ Sent: ${result.message}`);
      } else {
        const error = await response.text();
        setStatus(`❌ Error: ${error}`);
      }
    } catch (err) {
      setStatus(`❌ Exception: ${err.message}`);
    }
  };

  const logStatus = (text: string) => {
    setStatus(prev => `${text}\n${prev}`);
  };

  const logPayload = (data: string) => {
    try {
      let parsed = JSON.parse(data);

      // Check if we parsed a string again (double-encoded)
      if (typeof parsed === "string") {
        parsed = JSON.parse(parsed); // second parse
      }

      const pretty = JSON.stringify(parsed, null, 2);
      setPayload(`📦 Payload:\n${pretty}`);
    } catch (err) {
      logStatus(`❌ Invalid JSON: ${data}`);
    }
  };

  return (
    <AppShell pageTitle="Backend connection testbed">
      <>
        <div style={{width: '800px', margin: '0 auto'}}>
          <Container

            header={
              <Header variant="h2">
                CTrader JSON Testbed
              </Header>
            }
          >
            <SpaceBetween direction="vertical" size="l">
              <FormField
                description="Endpoint and port for the cTrader JSON server"
                label="cTrader Endpoint"
              >
                <Input
                  value={endpointValue}
                  onChange={event =>
                    setEndpointValue(event.detail.value)
                  }
                />
              </FormField>

              <Textarea
                rows={10}
                value={status}
                placeholder="Result"
                readOnly
              />

              {/* WebSocket status display */}
              <div>
                <strong>WebSocket status:</strong> {socketStatus}
              </div>

              <Wizard
                i18nStrings={{
                  stepNumberLabel: stepNumber =>
                    `Step ${stepNumber}`,
                  collapsedStepsLabel: (stepNumber, stepsCount) =>
                    `Step ${stepNumber} of ${stepsCount}`,
                  skipToButtonLabel: (step, stepNumber) =>
                    `Skip to ${step.title}`,
                  navigationAriaLabel: "Steps",
                  cancelButton: "Cancel",
                  previousButton: "Previous",
                  nextButton: "Next",
                  optional: "optional"
                }}
                onNavigate={({detail}) =>
                  setActiveStepIndex(detail.requestedStepIndex)
                }
                activeStepIndex={activeStepIndex}
                submitButtonText="Launch instance"
                allowSkipTo={false}
                steps={[
                  {
                    title: "Connect WebSocket",
                    description:
                      "Connects to the cTrader websocket server",
                    content: (
                      <Container>
                        {/* Connect WebSocket Button */}
                        <Button onClick={() => {
                          if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
                            const socket = new WebSocket('wss://demo.ctraderapi.com:5036');
                            socketRef.current = socket;

                            socket.onopen = () => {
                              setSocketStatus('Connected');
                              logStatus('✅ WebSocket connected');
                              // socket.send(JSON.stringify({ type: 'hello', message: 'Ping from client' }));
                            };

                            socket.onmessage = (event) => {
                              console.log('Message from server:', event.data);
                              logStatus('⚠️ message from server');
                              //logStatus(`⚠️ ${event.data}`);
                              logPayload(JSON.stringify(event.data, null, 2));

                            };

                            socket.onclose = () => {
                              setSocketStatus('Disconnected');
                              logStatus('❌ WebSocket disconnected');
                            };

                            socket.onerror = (err) => {
                              console.error('WebSocket error', err);
                              logStatus('⚠️ WebSocket error');
                            };
                          } else {
                            logStatus('ℹ️ WebSocket already open');
                          }
                        }}>
                          Connect WebSocket
                        </Button>
                      </Container>
                    )
                  },
                  {
                    title: "Authenticate",
                    description:
                      "Authenticate the client with the cTrader server",
                    content: (
                      <Container>
                        <SpaceBetween direction="vertical" size="l">
                          <FormField label="cTrader client Id">
                            <Input value={clientId || ''} onChange={e => setClientId(e.detail.value)}/>
                          </FormField>
                          <FormField label="cTrader client secret">
                            <Input value={clientSecret || ''} onChange={e => setClientSecret(e.detail.value)}/>
                          </FormField>

                          <Button onClick={() => {
                            if (socketRef.current && socketRef.current.readyState == WebSocket.OPEN) {
                              logStatus('ℹ️ Authenticating client with cTrader');
                              const jsonText = JSON.stringify({
                                clientMsgId: "cm_id_2",
                                payloadType: 2100,
                                payload: {
                                  clientId: `${clientId}`,
                                  clientSecret: `${clientSecret}`
                                }
                              });
                              console.log(jsonText);
                              logStatus('' + {jsonText});
                              try {
                                const parsed = JSON.parse(jsonText);         // validate it's valid JSON
                                const safeString = JSON.stringify(parsed);   // now you can send
                                socketRef.current?.send(safeString);
                              } catch (err) {
                                logStatus('ℹ️ Invalid JSON');
                                console.error("Invalid JSON", err);
                              }
                            } else {
                              logStatus('ℹ️ WebSocket not connected, go back to Step 1');
                            }
                          }}>
                            Authenticate client
                          </Button>
                        </SpaceBetween>
                      </Container>
                    ),
                    isOptional: false
                  },
                  {
                    title: "Authorize trading account",
                    content: (
                      <Container>
                        <SpaceBetween direction="vertical" size="l">
                          <FormField label="cTrader trader account Id">
                            <Input value={traderAccountId || ''} onChange={e => setTraderAccountId(e.detail.value)}/>
                          </FormField>
                          <FormField label="cTrader access token">
                            <Input value={accessToken || ''} onChange={e => setAccessToken(e.detail.value)}/>
                          </FormField>
                          <Button onClick={() => {
                            if (socketRef.current && socketRef.current.readyState == WebSocket.OPEN) {
                              logStatus('ℹ️ Authenticating client with cTrader');
                              const jsonText = JSON.stringify({
                                clientMsgId: "cm_id_2",
                                payloadType: 2102,
                                payload: {
                                  ctidTraderAccountId: Number(traderAccountId),
                                  accessToken: `${accessToken}`
                                }
                              });
                              console.log(jsonText);
                              logStatus('' + {jsonText});
                              try {
                                const parsed = JSON.parse(jsonText);         // validate it's valid JSON
                                const safeString = JSON.stringify(parsed);   // now you can send
                                socketRef.current?.send(safeString);
                              } catch (err) {
                                logStatus('ℹ️ Invalid JSON');
                                console.error("Invalid JSON", err);
                              }
                            } else {
                              logStatus('ℹ️ WebSocket not connected, go back to Step 1');
                            }
                          }}>
                            Authenticate trading account
                          </Button>
                        </SpaceBetween>
                      </Container>
                    ),
                    isOptional: false
                  },
                  {
                    title: "Dispatch payload for data",
                    content: (
                      <Container>
                        <SpaceBetween direction="vertical" size="l">
                          <FormField label="cTrader trader account Id">
                            <Input value={traderAccountId || ''} onChange={e => setTraderAccountId(e.detail.value)}/>
                          </FormField>
                          <FormField label="cTrader access token">
                            <Input value={accessToken || ''} onChange={e => setAccessToken(e.detail.value)}/>
                          </FormField>
                          <Button onClick={() => {
                            if (socketRef.current && socketRef.current.readyState == WebSocket.OPEN) {
                              logStatus('ℹ️ fetching payload from cTrader');
                              const jsonText = JSON.stringify({
                                clientMsgId: "cm_id_2",
                                payloadType: 2133,
                                payload: {
                                  fromTimestamp: 0,
                                  toTimestamp: 2147483646000,
                                  ctidTraderAccountId: Number(traderAccountId),
                                }
                              });
                              console.log(jsonText);
                              logStatus('' + {jsonText});
                              try {
                                const parsed = JSON.parse(jsonText);         // validate it's valid JSON
                                const safeString = JSON.stringify(parsed);   // now you can send
                                socketRef.current?.send(safeString);
                              } catch (err) {
                                logStatus('ℹ️ Invalid JSON');
                                console.error("Invalid JSON", err);
                              }
                            } else {
                              logStatus('ℹ️ WebSocket not connected, go back to Step 1');
                            }
                          }}>
                            Dispatch payload
                          </Button>
                        </SpaceBetween>
                      </Container>
                    )
                  }
                ]}
              />


              <Button onClick={sendJsonOverTcp}>Send</Button>

              <Textarea
                rows={10}
                onChange={({detail}) => setJsonText(detail.value)}
                value={payload}
                placeholder="Payload from cTrader..."
              />
            </SpaceBetween>
          </Container>
        </div>
      </>
    </AppShell>
  )
}
