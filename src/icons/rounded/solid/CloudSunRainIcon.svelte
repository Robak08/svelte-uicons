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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.986 24a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm9.162-10.855a1.057 1.057 0 0 1-.605-.466 6 6 0 0 0-11.368.854A10.233 10.233 0 0 0 8 15.538 1.9 1.9 0 0 1 7.063 17a3.513 3.513 0 0 0 .923 5.643V20a3.01 3.01 0 0 1 5-2.22 2.99 2.99 0 0 1 4 0 3.01 3.01 0 0 1 5 2.22v1.989a5.008 5.008 0 0 0-1.838-8.844ZM5.333 13.1a7.9 7.9 0 0 0 .788.548c.03-.205.066-.4.111-.59a8.027 8.027 0 0 1 6.584-6 8.123 8.123 0 0 1 1.616-.051l1.993-1.143a1 1 0 0 0-.994-1.736L13.158 5.4a5.582 5.582 0 0 0-.615-.606l1.28-2.253a1 1 0 0 0-1.738-.988L10.8 3.807A5.516 5.516 0 0 0 10 3.6V1a1 1 0 0 0-2 0v2.589a5.285 5.285 0 0 0-.844.218l-1.29-2.235a1 1 0 0 0-1.732 1L5.422 4.8a5.525 5.525 0 0 0-.643.646L2.54 4.177a1 1 0 0 0-.988 1.738L3.794 7.19a5.311 5.311 0 0 0-.205.81H1a1 1 0 0 0 0 2h2.6a5.477 5.477 0 0 0 .222.836l-2.248 1.3a1 1 0 1 0 1 1.732l2.244-1.3a5.5 5.5 0 0 0 .515.532Z"/></svg>
  