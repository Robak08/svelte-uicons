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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.003 1.248A1.171 1.171 0 0 1 5.248.003C9.737.319 11.759 2.404 12 7c.241-4.596 2.263-6.681 6.752-6.997a1.173 1.173 0 0 1 1.245 1.245c-.316 4.489-2.407 6.486-7.002 6.727 0 .009.005.017.005.026v2c-.005 1.308-1.995 1.307-2 0v-2c0-.009.005-.017.005-.026-4.596-.241-6.686-2.238-7.002-6.727Zm19.441 12.01a3.008 3.008 0 0 0-2.203-1.248 2.955 2.955 0 0 0-2.331.839l-1.947 1.786C17.247 16.95 15.314 19.015 13 19H9c-1.308-.005-1.307-1.995 0-2h4c2.629-.048 2.627-3.953 0-4H9.088c-2.938 0-5.7 1.145-7.797 3.24L.274 17.311a1.002 1.002 0 0 0-.274.688v5a1 1 0 0 0 1 1h10.32c2.746 0 5.377-1.019 7.408-2.868l4.318-3.935c1.07-1.073 1.241-2.766.397-3.939Z"/></svg>
  