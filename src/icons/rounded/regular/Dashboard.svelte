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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.9 11.437A12 12 0 0 0 0 13a11.878 11.878 0 0 0 3.759 8.712A4.84 4.84 0 0 0 7.113 23h9.767a4.994 4.994 0 0 0 3.509-1.429A11.944 11.944 0 0 0 23.9 11.437Zm-4.909 8.7A3 3 0 0 1 16.88 21H7.113a2.862 2.862 0 0 1-1.981-.741A9.9 9.9 0 0 1 2 13a10.014 10.014 0 0 1 3.338-7.457A9.881 9.881 0 0 1 11.986 3a10.553 10.553 0 0 1 1.174.066 9.994 9.994 0 0 1 5.831 17.076ZM7.807 17.285a1 1 0 0 1-1.4 1.43A8 8 0 0 1 12 5a8.072 8.072 0 0 1 1.143.081 1 1 0 0 1 .847 1.133.989.989 0 0 1-1.133.848 6 6 0 0 0-5.05 10.223Zm12.112-5.428A8.072 8.072 0 0 1 20 13a7.931 7.931 0 0 1-2.408 5.716 1 1 0 0 1-1.4-1.432 5.98 5.98 0 0 0 1.744-5.141 1 1 0 0 1 1.981-.286Zm-5.993.631a2.033 2.033 0 1 1-1.414-1.414l3.781-3.781a1 1 0 1 1 1.414 1.414Z"/></svg>
  