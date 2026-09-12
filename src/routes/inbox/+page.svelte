<script lang="ts">
    import { authClient } from "$lib/auth-client";
    import { getMessages } from "./data.remote";

    const session = authClient.useSession();
</script>

<div>
    {#if $session.data}
        <div>
            <p>
                {$session.data.user.name}
            </p>
            <button
                onclick={async () => {
                    await authClient.signOut();
                }}
            >
                Sign Out
            </button>
            <ul>
                {#each await getMessages() as message}
                    <li>{message.id} - {message.threadId}</li>
                {/each}
            </ul>
        </div>
    {:else}
        <button
            onclick={async () => {
                await authClient.signIn.social({
                    provider: "google",
                    callbackURL: "/inbox",
                });
            }}
        >
            Continue with Google
        </button>
    {/if}
</div>
