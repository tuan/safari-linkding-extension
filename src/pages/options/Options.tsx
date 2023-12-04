import React from 'react';
import { useEffect } from 'react';
import linkdingConfigStorage from '@root/src/shared/storages/configStorage';
import { FormEvent } from 'react';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const DEFAULT_LINKDING_HOST = 'http://localhost:9090';
const Options: React.FC = () => {
  const [host, setHost] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function getHost() {
      const config = await linkdingConfigStorage.get();
      setHost(config.host);
    }

    getHost();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleHostChange({ target }: ChangeEvent<HTMLInputElement>) {
    setHost(target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    linkdingConfigStorage.set({ host });
    window.close();
  }

  return (
    <div className="w-full h-screen max-h-[50vh] flex items-center justify-center mb-20">
      <form onSubmit={handleSubmit} className="flex flex-col w-96 p-2">
        <label htmlFor="hostInput" className="block text-sm font-medium leading-6 text-gray-900 mt-2">
          Your linkding's host address:
        </label>
        <div className="flex justify-between mt-2">
          <input
            ref={inputRef}
            type="text"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 
                    text-gray-900 placeholder:text-gray-400 
                    focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={DEFAULT_LINKDING_HOST}
            name="hostInput"
            id="hostInput"
            value={host}
            onChange={handleHostChange}
          />
          <input
            type="submit"
            title="Submit"
            className="rounded-md bg-indigo-600 px-3 py-2 ml-2 
                      text-sm font-semibold text-white 
                      shadow-sm hover:bg-indigo-500 
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </div>
      </form>
    </div>
  );
};

export default Options;
