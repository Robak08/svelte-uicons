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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 0a1.959 1.959 0 0 0-2 2v7H5.468L4.229 7.512C3.48 6.459.292 4.933 0 7a1 1 0 0 0 1 1 2.2 2.2 0 0 1 1.692.792L4 10.362V11a5.006 5.006 0 0 0 5 5h2.865l-2.6 3.12a2.5 2.5 0 1 0 1.5 1.323L14 16.562l3.234 3.881a2.5 2.5 0 1 0 1.5-1.323L16.135 16H19a5.006 5.006 0 0 0 5-5v-1c0-9.886-8.91-10-9-10Zm6.961 9H15V2a7.083 7.083 0 0 1 6.961 7ZM19 14H9a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3Z"/></svg>
  