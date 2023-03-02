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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M447.987 0H341.561c-11.755 0-21.285 9.53-21.285 21.285s9.53 21.285 21.285 21.285h97.614L293.754 187.991c-78.702-62.08-192.828-48.605-254.908 30.097S-9.758 410.916 68.944 472.996s192.828 48.605 254.908-30.097c51.995-65.917 51.995-158.893 0-224.81l145.42-145.421v97.614c0 11.756 9.53 21.285 21.285 21.285s21.285-9.53 21.285-21.285V63.856C511.842 28.589 483.253 0 447.987 0z"/></svg>
  