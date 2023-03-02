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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.24 8h6.75c-.6.89-1.39 2.16-2.45 4H4.98c.87-1.59 1.61-2.9 2.26-4ZM18 6h5.86a7.296 7.296 0 0 0-2.23-4.01A7.405 7.405 0 0 0 18 .15V6ZM1.41 18H8.1c.76-1.27 1.47-2.46 1.78-3.02.19-.34.36-.66.54-.98h-6.6c-.74 1.24-1.69 2.81-2.41 4ZM18.09 8v.02c-.18.38-.27.79-.27 1.22 0 1.33.89 2.76 2.84 2.76 1.26 0 2.4-.77 2.83-1.93.25-.68.41-1.37.47-2.07H18.1Zm-2.46-2c.12-.07.24-.13.36-.17V.03c-1.88.14-3.62.96-4.91 2.35-.4.42-1.12 1.21-2.64 3.62h7.19ZM.26 20c-.27.62-.33 1.3-.13 1.96.23.75.73 1.36 1.42 1.72a2.842 2.842 0 0 0 3.82-1.14c.14-.25.77-1.29 1.52-2.53H.26Z"/></svg>
  