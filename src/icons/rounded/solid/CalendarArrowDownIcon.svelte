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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-9H0v9Zm8.293-1.895a.999.999 0 0 1 1.414 0L11 18.398V14a1 1 0 1 1 2 0v4.398l1.293-1.293a.999.999 0 1 1 1.414 1.414l-1.613 1.613c-.577.577-1.336.866-2.094.866s-1.517-.289-2.094-.866l-1.613-1.613a.999.999 0 0 1 0-1.414ZM24 7v1H0V7c0-2.757 2.243-5 5-5h1V1a1 1 0 0 1 2 0v1h8V1a1 1 0 0 1 2 0v1h1c2.757 0 5 2.243 5 5Z"/></svg>
  