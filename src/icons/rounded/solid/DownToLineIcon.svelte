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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 24H1c-.55 0-1-.45-1-1s.45-1 1-1h22c.55 0 1 .45 1 1s-.45 1-1 1Zm-8.23-5.14 6.35-6.75c.87-.87 1.12-2.11.65-3.24a2.96 2.96 0 0 0-2.75-1.85H17V2.99c.01-1.67-1.36-3-3.02-3H10c-1.66 0-3 1.34-3 3v4H5.13c-1.17 0-2.3.61-2.81 1.66-.57 1.18-.34 2.51.54 3.4l6.29 6.8a3.984 3.984 0 0 0 5.62 0Z"/></svg>
  