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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 6H5c-2.757 0-5 2.243-5 5v8c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-8c0-2.757-2.243-5-5-5ZM9 22H6v-2.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V22Zm9 0h-3v-2.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V22Zm4-3a3.004 3.004 0 0 1-2 2.828V19.5c0-1.93-1.57-3.5-3.5-3.5S13 17.57 13 19.5V22h-2v-2.5c0-1.93-1.57-3.5-3.5-3.5S4 17.57 4 19.5v2.328A3.004 3.004 0 0 1 2 19v-8c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v8Zm-12-6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm9 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM4.502 2.677l2.45-2.45a.776.776 0 0 1 1.096 0l2.451 2.451a.775.775 0 0 1-.548 1.323H5.05a.775.775 0 0 1-.548-1.323Zm9-1.355A.774.774 0 0 1 14.05 0h4.901c.69 0 1.036.834.548 1.322l-2.451 2.451a.774.774 0 0 1-1.096 0l-2.451-2.451Z"/></svg>
  