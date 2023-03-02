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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 23a1 1 0 0 1-1 1h-1.246a2.008 2.008 0 0 1-1.923-1.451l-1.378-4.824a1.005 1.005 0 0 0-.962-.725H10c-1.654 0-3-1.346-3-3V8a1 1 0 1 1 2 0v2h6a1 1 0 1 1 0 2H9v2c0 .552.449 1 1 1h4.491c1.332 0 2.519.895 2.885 2.175L18.754 22H20a1 1 0 0 1 1 1ZM8.5 5C9.879 5 11 3.879 11 2.5S9.879 0 8.5 0 6 1.121 6 2.5 7.121 5 8.5 5ZM13 19h-3c-2.757 0-5-2.243-5-5V8a1 1 0 1 0-2 0v6c0 3.859 3.14 7 7 7h3a1 1 0 1 0 0-2Z"/></svg>
  