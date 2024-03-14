#!/bin/bash

# Define the endpoint URL
URL="http://localhost:8000/user"

# Define the user data for 10 users
USER_DATA=(
    "username=John&email=john@example.com"
    "username=Alice&email=alice@example.com"
    "username=Bob&email=bob@example.com"
    "username=Emily&email=emily@example.com"
    "username=Michael&email=michael@example.com"
    "username=Sara&email=sara@example.com"
    "username=David&email=david@example.com"
    "username=Jessica&email=jessica@example.com"
    "username=Daniel&email=daniel@example.com"
    "username=Sarah&email=sarah@example.com"
)

# Loop through each user data and send curl requests
for ((i=0; i<${#USER_DATA[@]}; i++)); do
    echo "Sending request ${i+1}/${#USER_DATA[@]}..."
    curl -X POST -d "${USER_DATA[i]}" -H "Content-Type: application/x-www-form-urlencoded" $URL
    echo -e "\n"
done
