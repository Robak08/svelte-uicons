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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 23c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1ZM3.41 20 1.7 21.71c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l1.71-1.71v-4.35c0-1.71.73-3.34 2.01-4.48L14.17 1.1c1.77-1.54 4.46-1.44 6.12.22l.39.39c1.66 1.66 1.76 4.36.22 6.13l-8.65 10.14A6.01 6.01 0 0 1 7.76 20H3.41Zm4.35-2c.25 0 .5-.03.75-.08l-4.43-4.43c-.05.24-.08.49-.08.75V18h3.76Zm-2.44-6.73c-.11.1-.2.22-.3.33l5.38 5.38c.12-.1.24-.2.35-.32l8.63-10.13c.86-.99.81-2.49-.11-3.41l-.39-.39c-.92-.92-2.42-.98-3.41-.12L5.32 11.27Z"/></svg>
  