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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.781 20.367a7.494 7.494 0 0 0 2.2-4.729 7.96 7.96 0 0 0-5.621-8.277 1.089 1.089 0 0 1-.721-.734 7.96 7.96 0 0 0-13.07-3.473L1.707.293A1 1 0 0 0 .293 1.707l22 22a1 1 0 0 0 1.414-1.414zM9.1 3.065a5.992 5.992 0 0 1 6.624 4.155 3.1 3.1 0 0 0 2.044 2.052 5.971 5.971 0 0 1 4.213 6.21 5.406 5.406 0 0 1-1.627 3.458L5.982 4.568A5.952 5.952 0 0 1 9.1 3.065zm7.893 18.763a1 1 0 0 1-.887 1.1 12.216 12.216 0 0 1-1.321.07h-9.1A5.843 5.843 0 0 1 .057 18.3a5.446 5.446 0 0 1 2.881-5.65 7.646 7.646 0 0 1-.858-4.789 1 1 0 0 1 1.981.278 5.968 5.968 0 0 0 .6 3.585 2 2 0 0 1-.791 2.7 3.467 3.467 0 0 0-1.832 3.6A3.809 3.809 0 0 0 5.683 21h9.1a10.245 10.245 0 0 0 1.107-.059 1.008 1.008 0 0 1 1.104.887z"/></svg>
  