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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.927.269C21.162-1.126 23.071 3.414 23 4.5c-.477 4.764-8.542 2.41-3.073-4.231ZM24 12C23.412 27.9.586 27.9 0 12-.206 3.434 9.364-2.633 17.008 1.105c-1.071 1.872-1.514 4.4-.051 6.136C14.794 6.194 12.972 8.781 13 11a1 1 0 0 0 2 0c0-1.054.68-2 1-2s1 .946 1 2a1 1 0 0 0 1 1c1.782-.217.8-2.706.193-3.657a4.447 4.447 0 0 0 5.107-.349A11.952 11.952 0 0 1 24 12ZM6 12a1 1 0 0 0 1-1c0-1.054.679-2 1-2s1 .946 1 2a1 1 0 0 0 2 0c0-1.892-1.232-4-3-4s-3 2.108-3 4a1 1 0 0 0 1 1Zm10.789 2.024A15.4 15.4 0 0 1 12 15a15.4 15.4 0 0 1-4.8-.976 1 1 0 0 0-1.052 1.518A6.836 6.836 0 0 0 12 19a6.827 6.827 0 0 0 5.842-3.458 1 1 0 0 0-1.053-1.518Z"/></svg>
  