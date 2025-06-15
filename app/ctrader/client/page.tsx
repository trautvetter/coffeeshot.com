'use client'

import AppShell from "@/components/AppShell";

import React, {useMemo, useRef, useState} from 'react';
import {Container, FormField, Popover, SpaceBetween, Textarea, Wizard} from "@cloudscape-design/components";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Input from "@cloudscape-design/components/input";
import Steps from "@cloudscape-design/components/steps";
import {StatusIndicatorProps} from '@cloudscape-design/components';

export default function Home() {
  const [jsonText, setJsonText] = useState("{}");
  const [status, setStatus] = useState("");
  const [payload, setPayload] = useState("");
  const [endpointValue, setEndpointValue] = useState("https://demo.ctraderapi.com:5036");

  // cTrader
  const [clientId, setClientId] = useState(process.env.NEXT_PUBLIC_CTRADER_CLIENT_ID);
  const [clientSecret, setClientSecret] = useState(process.env.NEXT_PUBLIC_CTRADER_CLIENT_SECRET);
  const [traderAccountId, setTraderAccountId] = useState(process.env.NEXT_PUBLIC_CTRADER_TRADER_ACCOUNT_ID);
  const [accessToken, setAccessToken] = useState('cf5SYjJX4deffqdu7K6IDymJDh1j1Pz01eEQ9rcgr50');

  const [
    activeStepIndex,
    setActiveStepIndex
  ] = useState(0);

  // Steps statuses
  const [webSocketConnStatus, setWebSocketConnStatus] = useState<StatusIndicatorProps.Type>('pending');
  const [webSocketConnLabel, setWebSocketConnLabel] = useState<React.ReactNode>('WebSocket');
  const [authnStatus, setAuthnStatus] = useState<StatusIndicatorProps.Type>('pending');
  const [authnLabel, setAuthnLabel] = useState<React.ReactNode>('Authenticate');

  // WebSocket setup
  const [socketStatus, setSocketStatus] = useState('Disconnected');
  const socketRef = useRef<WebSocket | null>(null);


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

  const handleWebSocketConnStatusChange = (status: StatusIndicatorProps.Type, message?: String) => {
    setWebSocketConnStatus(status);
    switch (status) {
      case 'loading':
      case 'error':
      case 'pending':
      case 'warning':
      case 'stopped':
      case 'success':
        if (message) {
          return setWebSocketConnLabel(
            <Popover
              content={message}
              dismissButton={false}
            >
              WebSocket
            </Popover>
          );
        }
        return setWebSocketConnLabel('WebSocket');
    }
  }

  const handleAuthnStatusChange = (status: StatusIndicatorProps.Type, message?: String) => {
    setAuthnStatus(status);
    switch (status) {
      case 'loading':
      case 'error':
      case 'pending':
      case 'warning':
      case 'stopped':
      case 'success':
        if (message) {
          return setAuthnLabel(
            <Popover
              content={message}
              dismissButton={false}
            >
              WebSocket
            </Popover>
          );
        }
        return setWebSocketConnLabel('WebSocket');
    }
  }

  // Handle connecting WebSocket
  const handleConnectWebSocket = () => {
    function handleWebSocketMessage() {

    }

    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
      handleWebSocketConnStatusChange('loading');
      const socket = new WebSocket('wss://demo.ctraderapi.com:5036');
      socketRef.current = socket;

      socket.onopen = () => {
        setSocketStatus('Connected');
        handleWebSocketConnStatusChange('success');
        logStatus('✅ WebSocket connected');
        handleAuthentication()
      };

      socket.onmessage = (event) => {
        console.log('Message from server:', event.data);
        logStatus('⚠️ message from server');
        logPayload(JSON.stringify(event.data, null, 2));
        handleWebSocketMessage()
      };

      socket.onclose = () => {
        setSocketStatus('Disconnected');
        handleWebSocketConnStatusChange('stopped', "WebSocket disconnected");
        logStatus('❌ WebSocket disconnected');
        handleAuthentication()
      };

      socket.onerror = (err) => {
        console.error('WebSocket error', err);
        handleWebSocketConnStatusChange('error');
        logStatus('⚠️ WebSocket error');
      };
    } else {
      logStatus('ℹ️ WebSocket already open');
      handleWebSocketConnStatusChange('success', "Web Socket already open");
    }
  };

  const handleAuthentication = () => {
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
  }


  return (
    <AppShell pageTitle="CTrader Client">
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
              <Steps steps={[
                {
                  status: webSocketConnStatus,
                  header: webSocketConnLabel,
                  statusIconAriaLabel: webSocketConnStatus
                },
                {
                  status: authnStatus,
                  header: authnLabel,
                  statusIconAriaLabel: authnStatus
                },
                {
                  status: "pending",
                  header: "Authorise trading account",
                  statusIconAriaLabel: "pending"
                }
              ]}/>
              <Button onClick={handleConnectWebSocket}>Connect</Button>

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
