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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 24H6c-3.309 0-6-2.691-6-6V2.5C0 1.121 1.121 0 2.5 0h1.29c1.169 0 2.196.829 2.443 1.971l1.851 8.534s3.121-3.108 3.149-3.131a1.686 1.686 0 0 1 1.802-.204c.595.286.965.874.965 1.534v.888s2.205-2.195 2.233-2.218a1.686 1.686 0 0 1 1.802-.204c.595.286.965.874.965 1.534v.888s2.205-2.195 2.233-2.218a1.686 1.686 0 0 1 1.802-.204c.595.286.965.874.965 1.534V18c0 3.309-2.691 6-6 6ZM2.5 2c-.275 0-.5.225-.5.5V18c0 2.206 1.794 4 4 4h12c2.206 0 4-1.794 4-4V9.425l-3.294 3.283A1 1 0 0 1 17 12V9.425l-3.294 3.283A1 1 0 0 1 12 12V9.425l-3.294 3.283A.996.996 0 0 1 8 13h-.615a1 1 0 0 1-.978-.788L4.278 2.395A.502.502 0 0 0 3.79 2H2.5ZM10 18v-1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm5 0v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm5 0v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Z"/></svg>
  