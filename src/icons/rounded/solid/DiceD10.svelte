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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m14.807 11.645-2.8 2.105-2.813-2.106 2.812-7.718ZM7.26 11.11 11.068.657A1 1 0 0 1 12.007 0a3.986 3.986 0 0 0-3.093 1.462L1.991 9.708A4.973 4.973 0 0 0 1 12.147ZM12.948.659l3.793 10.451L23 12.146a5.081 5.081 0 0 0-1.013-2.47L15.1 1.469A3.984 3.984 0 0 0 12.01 0a1 1 0 0 1 .938.659ZM11.008 15.5l-3.266-2.443-6.571 1.089a5.11 5.11 0 0 0 1.172 2.04l6.788 6.72A3.961 3.961 0 0 0 11.008 24Zm5.251-2.444L13.008 15.5V24a3.912 3.912 0 0 0 1.855-1.076l6.837-6.775a4.976 4.976 0 0 0 1.143-2Z"/></svg>
  