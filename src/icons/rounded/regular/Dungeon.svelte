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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.925 0 1 4.925 1 11v9.882c0 1.451.978 2.784 2.402 3.06A3.005 3.005 0 0 0 7 21v-9.749c0-2.814 2.174-5.169 4.846-5.249a4.993 4.993 0 0 1 3.939 1.73c.826.951 1.216 2.208 1.216 3.468v9.681c0 1.451.978 2.784 2.402 3.06a3.005 3.005 0 0 0 3.598-2.942V11C23 4.925 18.075 0 12 0ZM5 21a1.001 1.001 0 0 1-2 0v-1h2v1Zm0-3H3v-2h2v2Zm0-4H3v-2h2v2Zm.107-4H3.093a9.554 9.554 0 0 1 .731-2.566l1.735 1.002A7.362 7.362 0 0 0 5.107 10Zm1.459-3.292L4.824 5.702a9.246 9.246 0 0 1 1.861-1.907L7.699 5.55a7.296 7.296 0 0 0-1.133 1.157ZM11 4.074a6.674 6.674 0 0 0-1.587.445l-1.01-1.75A8.615 8.615 0 0 1 11 2.055v2.019Zm3.6.422A6.895 6.895 0 0 0 13 4.07V2.053a8.863 8.863 0 0 1 2.609.695L14.6 4.496Zm2.901 2.173a7.16 7.16 0 0 0-1.17-1.17l1.008-1.746a9.15 9.15 0 0 1 1.909 1.906L17.5 6.668ZM18.504 8.4l1.748-1.01c.36.822.594 1.7.693 2.61h-2.016a6.916 6.916 0 0 0-.425-1.6ZM21 21a1.001 1.001 0 0 1-2 0v-1h2v1Zm0-3h-2v-2h2v2Zm0-4h-2v-2h2v2Zm-10-4v13a1 1 0 1 1-2 0V10a1 1 0 1 1 2 0Zm4 0v13a1 1 0 1 1-2 0V10a1 1 0 1 1 2 0Z"/></svg>
  