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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.707 5.293-5-5a1 1 0 0 0-1.414 1.414L19.086 3.5 17.6 4.983a5 5 0 0 0-6.481.481L5.05 11.536A6.954 6.954 0 0 0 3 16.485v3.1L.293 22.293a1 1 0 1 0 1.414 1.414L4.414 21h3.1a6.954 6.954 0 0 0 4.949-2.05l6.072-6.072a4.993 4.993 0 0 0 .482-6.478L20.5 4.914l1.793 1.793a1 1 0 0 0 1.414-1.414zm-6.585 6.171-6.072 6.072A4.967 4.967 0 0 1 7.515 19H5v-2.515a5.11 5.11 0 0 1 .095-.976l1.2 1.2a1 1 0 1 0 1.414-1.414l-1.741-1.741a4.989 4.989 0 0 1 .5-.6l1.032-1.04 1.793 1.793a1 1 0 0 0 1.414-1.414L8.914 10.5 10.5 8.914l1.793 1.793a1 1 0 0 0 1.414-1.414L11.914 7.5l.622-.622a3.073 3.073 0 0 1 4.242 0l.344.344a3 3 0 0 1 0 4.242z"/></svg>
  