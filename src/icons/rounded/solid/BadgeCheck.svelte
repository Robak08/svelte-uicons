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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12c0-1.626-.714-3.16-1.925-4.124a5.49 5.49 0 0 0-1.59-4.362c-1.15-1.149-2.735-1.728-4.277-1.555-2.014-2.556-6.365-2.604-8.332-.035a5.467 5.467 0 0 0-4.361 1.59c-1.149 1.15-1.729 2.74-1.555 4.277-2.556 2.014-2.605 6.365-.035 8.333a5.49 5.49 0 0 0 1.59 4.362c1.15 1.149 2.737 1.73 4.277 1.555 2.014 2.556 6.365 2.604 8.332.035a5.5 5.5 0 0 0 4.361-1.59c1.149-1.15 1.729-2.74 1.555-4.277A5.487 5.487 0 0 0 24 12.001Zm-6.46-1.434-4.739 4.568c-1.163 1.161-3.066 1.151-4.229-.013L6.32 13.029a1 1 0 0 1 1.361-1.465l2.278 2.117c.418.417 1.05.416 1.44.025l4.752-4.581a1 1 0 0 1 1.389 1.44Z"/></svg>
  