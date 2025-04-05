<script lang="ts">
    import { page } from '$app/stores';
  
    const user = {
      name: 'User Name',
      email: 'user@example.com',
    };
  </script>
  
  <div class="w-64 bg-white h-full p-4 flex flex-col shadow-md">
    <!-- Branding -->
    <h1 class="text-xl font-bold text-gray-800 mb-6">min_mail</h1>
  
    <!-- Navigation -->
    <nav class="flex-1">
      <ul class="space-y-2">
        <li>
          <a
            href="/"
            class="flex items-center gap-2 p-2 rounded {$page.url.pathname === '/' ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'}"
            aria-current={$page.url.pathname === '/' ? 'page' : undefined}
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l9-6 9 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
            Inbox
          </a>
        </li>
        <li>
          <a
            href="/compose"
            class="flex items-center gap-2 p-2 rounded {$page.url.pathname === '/compose' ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'}"
            aria-current={$page.url.pathname === '/compose' ? 'page' : undefined}
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Compose
          </a>
        </li>
        <li>
          <a
            href="/settings"
            class="flex items-center gap-2 p-2 rounded {$page.url.pathname === '/settings' ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'}"
            aria-current={$page.url.pathname === '/settings' ? 'page' : undefined}
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  
    <!-- User Profile -->
    <div class="mt-auto flex items-center gap-3">
      <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium">
        {user.name[0]}
      </div>
      <div>
        <p class="text-sm font-medium text-gray-800">{user.name}</p>
        <p class="text-xs text-gray-500">{user.email}</p>
      </div>
    </div>
  </div>