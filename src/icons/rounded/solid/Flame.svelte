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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.746 18.254c0-1.5-1.031-3.55-2.9-5.773a1.088 1.088 0 0 0-.846-.389 1.117 1.117 0 0 0-.854.391C9.1 14.88 8.1 17 8.273 18.625a3.668 3.668 0 0 0 1.582 2.557A3.622 3.622 0 0 0 12 22a3.75 3.75 0 0 0 3.746-3.746Z"/><path d="M16.629 2.9c-.786-.668-1.611-1.368-2.451-2.132A2.952 2.952 0 0 0 11.8.028a2.847 2.847 0 0 0-2.032 1.3 20.39 20.39 0 0 0-2.492 6.448 6.233 6.233 0 0 1-.476-.815 2 2 0 0 0-3.3-.473 9.069 9.069 0 0 0-2.585 6.421A10.979 10.979 0 0 0 9.136 23.64a11.651 11.651 0 0 0 2.776.352 5.552 5.552 0 0 1-3.278-1.226 5.631 5.631 0 0 1-2.35-3.934c-.23-2.21.893-4.783 3.338-7.647A3.114 3.114 0 0 1 12 10.092h.01a3.1 3.1 0 0 1 2.366 1.1c1.538 1.827 3.373 4.535 3.373 7.061a5.749 5.749 0 0 1-5.359 5.727 11.056 11.056 0 0 0 10.7-11.065c-.005-4.53-2.997-7.07-6.461-10.015Z"/></svg>
  