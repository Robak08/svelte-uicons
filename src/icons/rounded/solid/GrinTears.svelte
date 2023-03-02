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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.382 16.38A7.092 7.092 0 0 1 19 12.693a.638.638 0 0 1 .689-.693c1.186.131 3.535.634 4.125 2.036a11.99 11.99 0 1 0-23.628 0c.589-1.4 2.939-1.906 4.125-2.036a.638.638 0 0 1 .689.693c-.115 1.925-1.486 5.537-4.073 3.933 4.055 9.774 18.1 9.768 22.146 0a2.112 2.112 0 0 1-2.691-.246ZM5 10c.248-5.285 5.753-5.282 6 0a1 1 0 0 1-2 0c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 0 1-2 0Zm12.842 5.542A6.827 6.827 0 0 1 12 19a6.836 6.836 0 0 1-5.848-3.458A1 1 0 0 1 7.2 14.024 15.4 15.4 0 0 0 12 15a15.4 15.4 0 0 0 4.792-.976 1 1 0 0 1 1.05 1.518ZM18 11a1 1 0 0 1-1-1c0-1.054-.68-2-1-2s-1 .946-1 2a1 1 0 0 1-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 0 1-1 1Z"/></svg>
  