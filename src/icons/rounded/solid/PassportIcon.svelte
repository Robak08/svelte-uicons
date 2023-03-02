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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 0H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm-4.977 4.171c.561 0 .87 2.265.977 4.829h-1.954c.107-2.564.416-4.829.977-4.829ZM13 11c-.107 2.564-.435 4.829-.977 4.829s-.87-2.265-.977-4.829H13ZM8.562 5.118c.41-.291.978.055.877.548-.251 1.215-.351 2.473-.39 3.334H6.114a5.988 5.988 0 0 1 2.448-3.882ZM6.114 11h2.935c.039.861.14 2.119.39 3.334.102.493-.466.839-.877.548A5.988 5.988 0 0 1 6.114 11Zm9.887 9H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2Zm-.516-5.118c-.41.291-.978-.055-.877-.548.251-1.215.351-2.473.39-3.334h2.935a5.988 5.988 0 0 1-2.448 3.882ZM14.998 9c-.039-.861-.14-2.119-.39-3.334-.102-.493.466-.839.877-.548A5.985 5.985 0 0 1 17.933 9h-2.935Z"/></svg>
  