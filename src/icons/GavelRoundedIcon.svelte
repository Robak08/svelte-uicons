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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-gavel {customClass}"><path d="M23.704 10.806a.999.999 0 0 0-1.414 0l-.549.549-9.082-9.082.549-.549A.999.999 0 1 0 11.794.31l-7 7a.999.999 0 1 0 1.414 1.414l.581-.581 3.827 3.827L.293 22.293a.999.999 0 1 0 1.414 1.414L12.03 13.384l3.841 3.841-.58.58a.999.999 0 1 0 1.414 1.414l7-7a.999.999 0 0 0 0-1.414Zm-9.088 2.337-3.672-3.672 3.042-3.042 3.672 3.672-3.042 3.042Zm-3.371-9.456 1.327 1.327L9.53 8.056 8.203 6.729l3.042-3.042Zm4.786 10.87 3.042-3.042 1.254 1.254-3.042 3.042-1.254-1.254Z"/></svg>
  