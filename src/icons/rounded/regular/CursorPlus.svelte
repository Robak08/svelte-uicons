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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 8a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zm4-6a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1zM12 4.981a1 1 0 0 0-.586-.891L2.739.146a.893.893 0 0 0-.09-.037A1.99 1.99 0 0 0 .588.588a2.011 2.011 0 0 0-.442 2.151l3.944 8.675a1 1 0 0 0 .891.586H5a1 1 0 0 0 .895-.553l1.85-3.7 3.7-1.85A1 1 0 0 0 12 4.981zM6.553 6.105a1 1 0 0 0-.448.448L5.041 8.681 2 2.005l6.679 3.038z"/></svg>
  