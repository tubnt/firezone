defmodule FzHttpWeb.JSON.RuleControllerTest do
  use FzHttpWeb.APICase

  describe "show rule" do
    test "shows rule", %{conn: conn} do
      conn = get(conn, ~p"/v1/rules/0")
      assert response(conn, 400)
    end
  end

  describe "create rule" do
    test "creates rule", %{conn: conn} do
      conn = post(conn, ~p"/v1/rules", rule: %{"user_id" => 0})
      assert response(conn, 400)
    end
  end

  describe "list rules" do
    test "lists rules", %{conn: conn} do
      conn = get(conn, ~p"/v1/rules")
      assert response(conn, 400)
    end
  end

  describe "delete rule" do
    test "deletes rule", %{conn: conn} do
      conn = delete(conn, ~p"/v1/rules/0")
      assert response(conn, 400)
    end
  end

  describe "update rule" do
    test "deletes rule", %{conn: conn} do
      conn = put(conn, ~p"/v1/rules/0")
      assert response(conn, 400)
    end
  end
end