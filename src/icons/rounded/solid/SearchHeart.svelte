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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M506.02 475.898 378.865 348.743c74.591-91.227 61.105-225.648-30.122-300.239S123.095-12.601 48.504 78.626s-61.105 225.649 30.122 300.239c78.578 64.249 191.54 64.249 270.118 0L475.898 506.02c8.463 8.173 21.949 7.939 30.122-.524 7.973-8.255 7.973-21.342 0-29.598zm-265.452-163.05c-15.533 12.371-37.553 12.371-53.086 0-36.491-29.312-79.97-73.26-79.97-115.865-1.089-36.439 27.475-66.907 63.908-68.168a61.584 61.584 0 0 1 42.605 17.383 61.588 61.588 0 0 1 42.605-17.383c36.433 1.262 64.997 31.73 63.908 68.168 0 42.605-43.478 86.553-79.97 115.865zm37.365-115.865c0 19.172-24.541 50.913-63.78 82.654-39.495-31.741-64.036-63.482-64.036-82.654-1.063-12.906 8.416-24.282 21.303-25.563 12.886 1.281 22.366 12.657 21.303 25.563 0 11.765 9.537 21.303 21.303 21.303 11.765 0 21.303-9.537 21.303-21.303-1.063-12.906 8.416-24.282 21.303-25.563 12.885 1.281 22.364 12.657 21.301 25.563z"/></svg>
  