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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M448.383 286.442a63.278 63.278 0 0 0-44.065 17.876l-25.107-12.554c20.494-67.214-17.38-138.315-84.594-158.809a127.244 127.244 0 0 0-75.38.361l-14.717-26.571c23.622-25.866 21.803-65.984-4.063-89.605-25.866-23.622-65.983-21.803-89.605 4.063s-21.803 65.983 4.063 89.605a63.424 63.424 0 0 0 42.953 16.591c3.05-.087 6.09-.392 9.097-.912l14.589 26.358c-55.259 41.007-67.66 118.636-27.928 174.818l-61.793 59.375c-32.782-14.681-71.258-.008-85.939 32.774s-.008 71.258 32.774 85.939c32.782 14.681 71.258.008 85.939-32.774a65.04 65.04 0 0 0-1.856-56.973l60.563-58.209c56.591 40.988 135.691 28.375 176.727-28.182l25.447 12.723a61.803 61.803 0 0 0-.721 7.719c0 35.134 28.482 63.617 63.617 63.617S512 385.193 512 350.059s-28.482-63.617-63.617-63.617z"/></svg>
  