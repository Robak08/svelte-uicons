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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256C511.847 114.678 397.322.153 256 0zm85.333 311.189c8.669 7.979 9.229 21.475 1.25 30.144-7.979 8.669-21.475 9.229-30.144 1.25-.434-.399-.85-.816-1.25-1.25L256 286.165l-55.168 55.168c-8.475 8.185-21.98 7.95-30.165-.525-7.984-8.267-7.984-21.373 0-29.64L225.835 256l-55.168-55.168c-8.185-8.475-7.95-21.98.525-30.165 8.267-7.984 21.373-7.984 29.64 0L256 225.835l55.189-55.168c7.979-8.669 21.475-9.229 30.144-1.25 8.669 7.979 9.229 21.475 1.25 30.144-.399.434-.816.85-1.25 1.25L286.165 256l55.168 55.189z"/></svg>
  