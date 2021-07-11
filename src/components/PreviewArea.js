import React, { useState } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="flex-none h-full p-2 overflow-y-auto">
        <CatSprite />
        <button
          onClick={() => {
            showMenu ? setShowMenu(false) : setShowMenu(true);
          }}
          class="z-2 p-100 w-16 h-16 bg-blue-500 rounded-full hover:bg-green-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none absolute bottom-0 right-0"
        >
          <svg
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            class="w-6 h-6 inline-block"
          >
            <path
              fill="#FFFFFF"
              d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
            />
          </svg>
          {showMenu && (
            <div className="absolute w-10 min-w-0 mb-4 ml-3 overflow-auto bg-blue-500 rounded-full bottom-10">
              <button  className="relative z-0 px-1 hover:bg-green-500 active:shadow-lg">
                <svg
                  class="h-8 w-8 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />{" "}
                  <polyline points="7 9 12 4 17 9" />{" "}
                  <line x1="12" y1="4" x2="12" y2="16" />
                </svg>
                
              </button>
              
              <button  className="px-1 hover:bg-green-500 active:shadow-lg">
                <svg
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </button>
              <button  className="px-1 hover:bg-green-500 active:shadow-lg">
                <svg
                  class="h-8 w-8 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />{" "}
                  <path d="M21 3a16 16 0 0 0 -12.8 10.2" />{" "}
                  <path d="M21 3a16 16 0 0 1 -10.2 12.8" />{" "}
                  <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                </svg>
              </button>
              
              <button className="relative z-0 px-1 hover:bg-green-500 active:shadow-lg">
                <svg
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>{" "}
              </button>
            </div>
          )}
        </button>
      </div>
    </>
  );
}
