import time
from collections import deque

MAX_REQUESTS = 9
WINDOW_SECONDS = 60

# A simple queue to track timestamps
request_timestamps = deque()

def can_proceed():
    current_time = time.time()

    # Remove timestamps outside the window
    while request_timestamps and (current_time - request_timestamps[0] > WINDOW_SECONDS):
        request_timestamps.popleft()

    if len(request_timestamps) >= MAX_REQUESTS:
        return False

    request_timestamps.append(current_time)
    return True
