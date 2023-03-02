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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5 18h17v1a5 5 0 0 1-5 5H5a3 3 0 1 1 0-6ZM22 5v11H5a3 3 0 0 0-.605.061A4.955 4.955 0 0 0 2 17.025V4.973A4.972 4.972 0 0 1 6.967 0H17a5 5 0 0 1 5 5ZM9.392 12.334c-.251-1.215-.351-2.473-.39-3.334H6.067a5.988 5.988 0 0 0 2.448 3.882c.41.291.978-.055.877-.548Zm-.877-9.215a5.985 5.985 0 0 0-2.448 3.882h2.935c.039-.861.14-2.119.39-3.334.102-.493-.466-.839-.877-.548Zm4.438 5.882h-1.954c.107 2.564.435 4.829.977 4.829s.87-2.265.977-4.829Zm0-2c-.107-2.564-.416-4.829-.977-4.829s-.87 2.265-.977 4.829h1.954Zm4.933 2h-2.935c-.039.861-.14 2.119-.39 3.334-.102.493.466.839.877.548a5.988 5.988 0 0 0 2.448-3.882Zm0-2a5.988 5.988 0 0 0-2.448-3.882c-.41-.291-.978.055-.877.548.251 1.215.351 2.473.39 3.334h2.935Z"/></svg>
  