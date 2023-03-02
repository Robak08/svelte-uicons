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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 5.734V2a1 1 0 1 0-2 0v2.366L14.797.855a5.002 5.002 0 0 0-5.594 0L2.204 5.577A5.002 5.002 0 0 0 0 9.723v9.276a5 5 0 0 0 5 5h3.174a1.5 1.5 0 0 0 1.399-.959l1.564-4.041H8.382a1.368 1.368 0 0 1-1.147-2.114l4.952-7.361a1.163 1.163 0 0 1 2.087.978l-1.369 4.497h2.87c.843 0 1.435.831 1.16 1.628l-2.032 6.054a1 1 0 0 0 .948 1.318h3.15a5 5 0 0 0 5-5V9.723a4.996 4.996 0 0 0-2-3.989Z"/></svg>
  