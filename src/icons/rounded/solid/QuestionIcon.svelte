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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 20a1 1 0 0 1-1-1c0-2.318 1.382-4.357 3.891-5.741 2.287-1.26 3.469-3.755 3.012-6.355-.423-2.408-2.399-4.385-4.808-4.808-1.812-.318-3.57.147-4.952 1.307A5.989 5.989 0 0 0 5.999 8a1 1 0 0 1-2 0 7.986 7.986 0 0 1 2.858-6.129A8.05 8.05 0 0 1 13.441.126c3.222.565 5.866 3.21 6.432 6.432.598 3.402-1.017 6.798-4.016 8.453C14.554 15.729 13 17.004 13 19a1 1 0 0 1-1 1Zm-1.5 2.5a1.5 1.5 0 1 0 3.001-.001 1.5 1.5 0 0 0-3.001.001Z"/></svg>
  