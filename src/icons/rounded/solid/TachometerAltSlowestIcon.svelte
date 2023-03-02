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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 13a11.878 11.878 0 0 0 3.759 8.712A4.84 4.84 0 0 0 7.113 23h9.767a4.994 4.994 0 0 0 3.509-1.429A12 12 0 1 0 0 13Zm5.109 1.875 4.915-2.114a2 2 0 1 1 .787 1.839L5.9 16.712a1 1 0 0 1-.79-1.837Zm-2.04-2.994a8.92 8.92 0 0 1 2.567-5.245 9 9 0 0 1 12.728 12.728c-.134.134-.27.263-.411.387a1 1 0 0 1-1.324-1.5c.109-.1.217-.2.321-.3a7 7 0 0 0-9.9-9.9 6.929 6.929 0 0 0-2 4.079 1 1 0 0 1-1.985-.248Z"/></svg>
  