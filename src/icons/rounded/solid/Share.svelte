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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512.629 512.629"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.006 256.014c-.218 54.774 44.009 99.354 98.784 99.572a99.179 99.179 0 0 0 68-26.612l147.797 66.731a100.988 100.988 0 0 0-1.685 16.747c-.174 55.152 44.393 100.002 99.545 100.177s100.002-44.393 100.177-99.545-44.393-100.002-99.545-100.177a99.862 99.862 0 0 0-82.534 43.182L191.686 293.39a97.58 97.58 0 0 0 .107-74.411L330.46 155.96c31.225 45.161 93.148 56.457 138.309 25.232S525.225 88.045 494 42.884s-93.148-56.457-138.309-25.232a99.412 99.412 0 0 0-42.875 81.925 98.726 98.726 0 0 0 1.707 16.768L167.11 183.331c-39.939-37.503-102.718-35.528-140.221 4.411A99.203 99.203 0 0 0 .006 256.014z"/></svg>
  