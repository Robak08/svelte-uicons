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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12a12.023 12.023 0 0 1-1.328 5.49 1 1 0 1 1-1.777-.916C24.369 10.166 19.314 1.829 12 2 4.831 1.842-.225 9.855 2.949 16.258a1 1 0 0 1-1.81.851C-2.669 9.424 3.4-.189 12 0a12.013 12.013 0 0 1 12 12Zm-10.177 9.834a10.149 10.149 0 0 1-3.637 0 1 1 0 1 0-.362 1.966 12.134 12.134 0 0 0 4.362 0 1 1 0 1 0-.363-1.967ZM10 12a1 1 0 0 0 1-1c0-1.892-1.232-4-3-4s-3 2.108-3 4a1 1 0 0 0 2 0c0-1.054.679-2 1-2s1 .946 1 2a1 1 0 0 0 1 1Zm6-5c-1.768 0-3 2.108-3 4a1 1 0 0 0 2 0c0-1.054.679-2 1-2s1 .946 1 2a1 1 0 0 0 2 0c0-1.892-1.232-4-3-4Zm-4 13c2.63-.074 2.63-5.927 0-6-2.63.074-2.63 5.927 0 6Zm6-6a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1ZM6 14a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1Z"/></svg>
  