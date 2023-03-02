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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m21.45 13.864-8.672 8.672a5.006 5.006 0 0 1-7.071 0l-4.242-4.243a5 5 0 0 1 0-7.071l5.9-5.9-2.854-2.893a1 1 0 1 1 1.422-1.4l8.97 9.081.009.013a.995.995 0 0 0 1.376-1.436l-7.21-7.3A1 1 0 0 1 10.707.293l13 13a1 1 0 1 1-1.414 1.414zm-.758 4.567C19.961 19.492 19 20.725 19 21.5a2.5 2.5 0 0 0 5 0c0-.849-.945-2.044-1.673-3.078a1 1 0 0 0-1.635.009z"/></svg>
  