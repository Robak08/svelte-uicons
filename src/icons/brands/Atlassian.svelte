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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.134 11.081c-.364-.4-.91-.364-1.164.109L.074 22.981C-.144 23.454.183 24 .693 24h8.188a.675.675 0 0 0 .619-.4c1.783-3.639.727-9.207-2.366-12.519zM11.429.382c-3.275 5.204-3.057 10.99-.91 15.321 2.183 4.331 3.821 7.679 3.967 7.897.109.255.364.4.619.4h8.188c.509 0 .873-.546.619-1.019 0 0-11.027-22.053-11.318-22.599-.219-.509-.838-.509-1.165 0z"/></svg>
  