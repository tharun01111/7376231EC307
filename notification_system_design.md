--Stage 1
BASE_URL = /api/v1
Authentication

All protected APIs use JWT authentication.

Headers
Authorization: Bearer <jwt_token>
Content-Type: application/json

--Stage 2
{
  "id": "notif_101",
  "title": "Placement Drive",
  "message": "TCS placement drive starts tomorrow",
  "type": "PLACEMENT",
  "priority": "HIGH",
  "isRead": false,
  "createdAt": "2026-05-08T10:30:00Z",
  "sender": {
    "id": "admin_01",
    "name": "Placement Cell"
  }
}

--Stage 3
Yes, the query is logically correct.
But the query becomes slow when the database size increases.
It does a full table scan and the order by will make it slow.