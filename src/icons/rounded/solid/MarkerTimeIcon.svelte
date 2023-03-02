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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 6a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm1.707 6.707a1 1 0 0 1-1.414 0l-1-1A1 1 0 0 1 11 11V9a1 1 0 0 1 2 0v1.586l.707.707a1 1 0 0 1 0 1.414zm6.07-9.485A11 11 0 1 0 4.25 18.805l3.942 3.643a5.445 5.445 0 0 0 7.594.019l3.991-3.689a11 11 0 0 0 0-15.556zM12 18a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7z"/></svg>
  