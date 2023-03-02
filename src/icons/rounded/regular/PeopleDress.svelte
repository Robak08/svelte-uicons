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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3.52 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0ZM11 16.63c.11.85-.16 1.71-.73 2.36-.34.39-.77.67-1.25.84V23c0 .55-.45 1-1 1s-1-.45-1-1v-3h-2v3c0 .55-.45 1-1 1s-1-.45-1-1v-3.17c-.48-.17-.91-.46-1.25-.84-.57-.65-.83-1.5-.73-2.36l.88-7.01C2.18 7.56 3.94 6 6.02 6s3.84 1.56 4.1 3.62l.88 7.01Zm-1.98.25-.88-7.01a2.137 2.137 0 0 0-4.24 0l-.88 7.01c-.04.29.05.57.24.79.19.22.46.34.75.34h4c.29 0 .56-.12.75-.34.19-.22.28-.5.24-.79ZM18 5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Zm4.25 13.99c-.34.39-.77.67-1.25.84V23c0 .55-.45 1-1 1s-1-.45-1-1v-3h-2v3c0 .55-.45 1-1 1s-1-.45-1-1v-3.17c-.48-.17-.91-.46-1.25-.84-.57-.64-.83-1.5-.73-2.36l.88-7.01C14.16 7.56 15.92 6 18 6s3.84 1.56 4.1 3.62l.88 7.01c.11.85-.16 1.71-.73 2.36Zm-1.26-2.11-.88-7.01a2.137 2.137 0 0 0-4.24 0l-.88 7.01c-.04.29.05.57.24.79.19.22.46.34.75.34h4c.29 0 .56-.12.75-.34.19-.22.28-.5.24-.79Z"/></svg>
  