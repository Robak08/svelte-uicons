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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-passport {customClass}"><path d="M16 20H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2Zm6-1V5c0-2.757-2.243-5-5-5H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5ZM17 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h10Zm-5.954 9c.107 2.564.435 4.829.977 4.829s.87-2.265.977-4.829h-1.954Zm3.562-5.334c-.102-.493.466-.839.877-.548A5.988 5.988 0 0 1 17.933 9h-2.935c-.039-.861-.14-2.119-.39-3.334Zm-2.585-1.495c.561 0 .87 2.265.977 4.829h-1.954c.107-2.564.416-4.829.977-4.829ZM9.438 5.666C9.187 6.881 9.087 8.139 9.048 9H6.113a5.988 5.988 0 0 1 2.448-3.882c.41-.291.978.055.877.548Zm5.169 8.668c.251-1.215.351-2.473.39-3.334h2.935a5.988 5.988 0 0 1-2.448 3.882c-.41.291-.978-.055-.877-.548Zm-5.169 0c.102.493-.466.839-.877.548A5.988 5.988 0 0 1 6.113 11h2.935c.039.861.14 2.119.39 3.334Z"/></svg>
  