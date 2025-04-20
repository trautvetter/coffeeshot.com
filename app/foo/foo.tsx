'use client';

import React, {useEffect, useState} from 'react';
import {useAddFooMutation, useDeleteFooMutation, useGetFoosQuery, useUpdateFooMutation,} from '@/services/fooApi';
import {foo} from '../../prisma/generated/client';

export function FooList() {
  const {data: foos, isLoading} = useGetFoosQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const [addFoo] = useAddFooMutation();
  const [deleteFoo, {isLoading: isDeleting}] = useDeleteFooMutation();
  const [updateFoo] = useUpdateFooMutation();

  // Local state for edit fields
  const [editValues, setEditValues] = useState<Record<number, { bar: string; baz: number | null }>>({});

  useEffect(() => {
    console.log('editValues:');
    Object.entries(editValues).forEach(([id, {bar, baz}]) => {
      console.log(`ID: ${id}, Bar: ${bar}, Baz: ${baz}`);
    });
  }, [editValues]);

  if (isLoading) return <p>Loading...</p>;

  const handleChange = (id: number, field: 'bar' | 'baz', value: string | number | null) => {
    setEditValues((prev) => {
      const prevEntry = prev[id] ?? {
        bar: foos?.find((f) => f.id === id)?.bar ?? '',
        baz: foos?.find((f) => f.id === id)?.baz ?? null,
      };

      return {
        ...prev,
        [id]: {
          ...prevEntry,
          [field]: field === 'baz'
            ? (value === '' ? null : parseFloat(String(value)))
            : String(value),
        },
      };
    });
  };

  const handleUpdate = async (id: number) => {
    const update = editValues[id];
    if (update) {
      await updateFoo({id, ...update});
    }
  };

  return (
    <>
      <button onClick={() => addFoo({bar: "New Foo"})}>Add w/Bar</button>
      <button onClick={() => addFoo({bar: 'ragaftj3', baz: 3.14})}>Add w/Baz</button>

      <ul>
        {foos?.map((foo: foo) => {
          // const values = editValues[foo.id] || { bar: foo.bar, baz: foo.baz ?? 0 };
          const values = editValues[foo.id] ?? {bar: foo.bar, baz: foo.baz ?? null};

          return (
            <li key={foo.id} style={{marginBottom: '1rem'}}>
              <input
                type="text"
                value={values.bar}
                onChange={(e) => handleChange(foo.id, 'bar', e.target.value)}
              />

              <input
                type="number"
                value={values.baz ?? ''}
                onChange={(e) =>
                  handleChange(
                    foo.id,
                    'baz',
                    e.target.value === '' ? null : parseFloat(e.target.value)
                  )
                }
              />
              <button onClick={() => handleUpdate(foo.id)}>Save</button>
              <button
                onClick={() => deleteFoo(foo.id)}
                disabled={isDeleting}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
