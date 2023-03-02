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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M399.211 256H298.667C275.103 256 256 236.897 256 213.333V112.512a63.999 63.999 0 0 0-24.875-50.837 61.248 61.248 0 0 0-52.928-11.392C52.767 81.419-23.674 208.342 7.463 333.773c21.937 88.372 93.145 155.995 182.532 173.342 122.11 23.373 241.257-52.547 271.659-173.099a61.354 61.354 0 0 0-11.371-53.013A65.173 65.173 0 0 0 399.211 256z"/><path d="M504.555 158.848a211.704 211.704 0 0 0-21.568-51.669A215.258 215.258 0 0 0 353.75 7.936c-3.585-.967-11.606-1.536-11.606-1.536-2.866.001-15.21 0-24.981 7.915-14.361 11.301-16.619 24.149-16.832 25.152a42.813 42.813 0 0 0-1.152 9.6v100.267c0 35.346 28.654 64 64 64h100.672a41.836 41.836 0 0 0 33.835-17.067 43.475 43.475 0 0 0 8.533-27.328 45.05 45.05 0 0 0-1.664-10.091z"/></svg>
  