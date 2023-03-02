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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512.308 512.308"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M505.878 36.682 110.763 431.69a63.318 63.318 0 0 0 27.413 6.4h67.669a21.187 21.187 0 0 1 15.083 6.251l36.672 36.651a106.043 106.043 0 0 0 75.157 31.317 107.276 107.276 0 0 0 34.261-5.653c38.05-12.475 65.726-45.46 71.403-85.099l72.085-342.4a63.12 63.12 0 0 0-4.628-42.475zM433.771 1.652 92.203 73.61C33.841 81.628-6.971 135.44 1.047 193.802a106.67 106.67 0 0 0 30.228 60.885l36.651 36.651a21.336 21.336 0 0 1 6.251 15.104v67.669a63.315 63.315 0 0 0 6.4 27.413L475.627 6.41a62.525 62.525 0 0 0-41.856-4.758z"/></svg>
  