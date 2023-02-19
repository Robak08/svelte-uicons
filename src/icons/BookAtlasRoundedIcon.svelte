<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-book-atlas {customClass}"><path d="M17 0H7C4.243 0 2 2.243 2 5v15c0 2.206 1.794 4 4 4h11c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5ZM7 2h10c1.654 0 3 1.346 3 3v11H6a3.98 3.98 0 0 0-2 .537V5c0-1.654 1.346-3 3-3Zm10 20H6c-1.103 0-2-.897-2-2s.897-2 2-2h14v1c0 1.654-1.346 3-3 3Zm-2.392-8.666c.251-1.215.351-2.473.39-3.334h2.935a5.988 5.988 0 0 1-2.448 3.882c-.41.291-.978-.055-.877-.548ZM13 8h-1.954c.107-2.564.416-4.829.977-4.829S12.893 5.436 13 8Zm1.608-3.334c-.102-.493.466-.839.877-.548A5.985 5.985 0 0 1 17.933 8h-2.935c-.039-.861-.14-2.119-.39-3.334ZM6.113 10h2.935c.039.861.14 2.119.39 3.334.102.493-.466.839-.877.548A5.988 5.988 0 0 1 6.113 10Zm2.935-2H6.113a5.988 5.988 0 0 1 2.448-3.882c.41-.291.978.055.877.548-.251 1.215-.351 2.473-.39 3.334Zm1.998 2H13c-.107 2.564-.435 4.829-.977 4.829s-.87-2.265-.977-4.829Z"/></svg>
  