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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.113 14.484a4.007 4.007 0 0 0-1.457-6.116 2.9 2.9 0 0 0 .266-2.032A3.169 3.169 0 0 0 16.8 4h-.942A6.778 6.778 0 0 0 13.2.107a.86.86 0 0 0-1.266.645A5.906 5.906 0 0 1 10.5 4H7.2a3.169 3.169 0 0 0-3.122 2.336 2.9 2.9 0 0 0 .266 2.032 4.007 4.007 0 0 0-1.457 6.116C-1.986 16.8-.251 24.014 5.211 24h12.405c6.631.289 8.624-6.836 3.497-9.516ZM14.5 11a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3Zm-5 0a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3Zm8.166 5.746a8.376 8.376 0 0 1-11.332 0 1 1 0 0 1 1.332-1.492 6.359 6.359 0 0 0 8.67 0 1 1 0 0 1 1.33 1.493Z"/></svg>
  