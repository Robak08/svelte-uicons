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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 .057A12.01 12.01 0 0 1 22.903 7H13V.057ZM7 9H.456A12.605 12.605 0 0 0 0 12.351V16h7V9Zm17 3c0-1.038-.147-2.039-.396-3H17v7h7v-4ZM11 7V.048c-.052.004-.103.001-.156.006C6.512.462 2.959 3.241 1.198 7H11Zm5 11v4a2 2 0 0 0 2 2h1.5a4.5 4.5 0 0 0 4.5-4.5V18h-8ZM0 19.5A4.5 4.5 0 0 0 4.5 24H6a2 2 0 0 0 2-2v-4H0v1.5Zm15-4.12V9H9v6.38c.733-.839 1.798-1.38 3-1.38s2.267.541 3 1.38Z"/></svg>
  