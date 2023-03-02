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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.537 12c0 3.764-3.03 6.815-6.769 6.815C3.03 18.815 0 15.764 0 12s3.03-6.815 6.769-6.815c3.738 0 6.768 3.051 6.768 6.815M20.963 12c0 3.543-1.515 6.415-3.384 6.415S14.195 15.543 14.195 12s1.515-6.415 3.384-6.415c1.868 0 3.384 2.872 3.384 6.415M24 12c0 3.174-.533 5.748-1.19 5.748-.657 0-1.19-2.573-1.19-5.748s.533-5.748 1.19-5.748C23.467 6.252 24 8.826 24 12"/></svg>
  